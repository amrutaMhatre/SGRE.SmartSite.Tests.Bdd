// --------------------------------------------------------------------------------------------------------------------
// <copyright file="PagedResult.cs" company="Microsoft">
//   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//   THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
//   OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
//   ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
//   OTHER DEALINGS IN THE SOFTWARE.
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

namespace Bdd.Core.Api.Entities
{
    using System.Collections.Generic;
    using System.Runtime.Serialization;
    using System.Diagnostics.CodeAnalysis;

    /// <summary>
    /// Repository base
    /// </summary>
    /// <typeparam name="TEntity">The type of the entity.</typeparam>
    [ExcludeFromCodeCoverage]
    [DataContract]     
    public class PagedResult<TEntity>
    {
        /// <summary>
        /// Gets the total result count.
        /// </summary>
        /// <value>
        /// Get's the total result count for Web view (JSX) rendering.
        /// </value>
        [DataMember(Name = "count")]
        public int Count => this.TotalResultCount;

        /// <summary>
        /// Gets or sets the current page number.
        /// </summary>
        /// <value>
        /// The current page number.
        /// </value>
        [DataMember(Name = "currentPageNumber")]
        public int? CurrentPageNumber { get; set; }

        /// <summary>
        /// Gets or sets the page size.
        /// </summary>
        /// <value>
        /// The page size.
        /// </value>
        [DataMember(Name = "pageSize")]
        public int? PageSize { get; set; }

        /// <summary>
        /// Gets or sets the OData count.
        /// </summary>
        /// <value>
        /// The count.
        /// </value>
        [DataMember(Name = "@odata.count")]
        public int TotalResultCount { get; set; }

        /// <summary>
        /// Gets or sets the results.
        /// </summary>
        /// <value>
        /// The results.
        /// </value>
        [DataMember(Name = "value")]
        public IEnumerable<TEntity> Values { get; set; }
    }
}